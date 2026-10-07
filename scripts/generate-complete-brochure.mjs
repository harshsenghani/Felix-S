import fs from "node:fs";
import path from "node:path";
import Module from "node:module";
import ts from "typescript";
import { jsPDF } from "jspdf";

const root = process.cwd();
const productsFile = path.join(root, "data", "products.ts");
const productsSource = fs.readFileSync(productsFile, "utf8");
const compiled = ts.transpileModule(productsSource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const dataModule = new Module(productsFile);
dataModule.filename = productsFile;
dataModule.paths = Module._nodeModulePaths(path.dirname(productsFile));
dataModule._compile(compiled, productsFile);
const { products, productCategories } = dataModule.exports;

const OUT = path.join(root, "public", "downloads", "felix-solutions-complete-product-catalogue.pdf");
const W = 210;
const H = 297;
const M = 16;
const BLUE = [57, 66, 133];
const CYAN = [0, 153, 204];
const INK = [28, 34, 50];
const MUTED = [93, 102, 118];
const LIGHT = [244, 246, 250];
const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
doc.setProperties({ title: "Felix Solutions Complete Product Catalogue", subject: "Product families, models, specifications and images", author: "Felix Solutions" });

function safe(s = "") {
  return String(s).replace(/[–—]/g, "-").replace(/×/g, "x").replace(/°/g, " deg ").replace(/[•·]/g, " | ").replace(/’/g, "'").replace(/“|”/g, '"');
}
function imageData(publicPath) {
  if (!publicPath) return null;
  const file = path.join(root, "public", publicPath.replace(/^\//, ""));
  if (!fs.existsSync(file)) return null;
  const ext = path.extname(file).toLowerCase();
  const mime = ext === ".png" ? "image/png" : ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "image/webp";
  return { data: `data:${mime};base64,${fs.readFileSync(file).toString("base64")}`, format: ext === ".png" ? "PNG" : ext === ".jpg" || ext === ".jpeg" ? "JPEG" : "WEBP" };
}
function textBlock(text, x, y, width, size = 9, color = INK, style = "normal", leading = 1.38) {
  doc.setFont("helvetica", style);
  doc.setFontSize(size);
  doc.setTextColor(...color);
  const lines = doc.splitTextToSize(safe(text), width);
  doc.text(lines, x, y);
  return y + lines.length * size * 0.3528 * leading;
}
function header(family, model, index, total) {
  doc.setFillColor(...BLUE); doc.rect(0, 0, W, 8, "F");
  doc.setFont("helvetica", "bold"); doc.setFontSize(7); doc.setTextColor(255, 255, 255);
  doc.text("FELIX SOLUTIONS  /  COMPLETE PRODUCT CATALOGUE", M, 5.3);
  doc.setDrawColor(220, 224, 232); doc.line(M, H - 13, W - M, H - 13);
  doc.setFont("helvetica", "normal"); doc.setFontSize(7); doc.setTextColor(...MUTED);
  doc.text("PACK  |  CODE  |  MARK", M, H - 7.7);
  doc.text(`${index} / ${total}`, W - M, H - 7.7, { align: "right" });
}
function sectionLabel(label, x, y) {
  doc.setFont("helvetica", "bold"); doc.setFontSize(8); doc.setTextColor(...BLUE);
  doc.text(safe(label.toUpperCase()), x, y);
  return y + 4;
}
function drawImage(publicPath, x, y, w, h) {
  const img = imageData(publicPath);
  doc.setFillColor(247, 248, 251); doc.roundedRect(x, y, w, h, 2, 2, "F");
  doc.setDrawColor(229, 232, 238); doc.roundedRect(x, y, w, h, 2, 2, "D");
  if (img) {
    try { doc.addImage(img.data, img.format, x + 2, y + 2, w - 4, h - 4, undefined, "FAST", 0); }
    catch { doc.setFontSize(7); doc.setTextColor(...MUTED); doc.text("Image unavailable", x + w / 2, y + h / 2, { align: "center" }); }
  } else {
    doc.setFontSize(7); doc.setTextColor(...MUTED); doc.text("Image unavailable", x + w / 2, y + h / 2, { align: "center" });
  }
}

// Cover
doc.setFillColor(...BLUE); doc.rect(0, 0, W, 104, "F");
const logo = imageData("/assets/felix-logo.png");
if (logo) {
  doc.setFillColor(255, 255, 255); doc.roundedRect(M - 2, 14, 54, 23, 2, 2, "F");
  try { doc.addImage(logo.data, "PNG", M, 17, 49, 17, undefined, "FAST"); } catch {}
}
doc.setFont("helvetica", "bold"); doc.setTextColor(255, 255, 255); doc.setFontSize(24);
doc.text("COMPLETE PRODUCT", M, 58); doc.text("CATALOGUE", M, 70);
textBlock("Machine photos, model-by-model details, applications and specifications", M, 82, 170, 10, [231, 239, 255], "normal");
const hero = imageData("/images/hero/catalogue-header-natural.png");
if (hero) { try { doc.addImage(hero.data, "PNG", 0, 104, W, 106, undefined, "FAST"); } catch {} }
doc.setFillColor(...LIGHT); doc.rect(0, 210, W, 87, "F");
doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.setTextColor(...INK); doc.text("PACKAGING LINE SOLUTIONS", M, 231);
textBlock("Coding and marking | Industrial labelling | Packaging and sealing | Material handling", M, 241, W - 2 * M, 10, MUTED);
textBlock("This catalogue follows the product and model information available in the Felix Solutions product library.", M, 259, W - 2 * M, 8, MUTED);
textBlock("Contact  +91 9870610432  |  +91 9967554054\nfelixsolutions1@gmail.com  |  felixsolutions2@gmail.com", M, 278, W - 2 * M, 8, BLUE, "bold");

// Contents page, populated with family start page numbers.
doc.addPage();
const familyPages = [];
let estimatedPage = 3;
for (const p of products) {
  familyPages.push({ name: p.name, page: estimatedPage });
  estimatedPage += Math.max(1, p.variants?.length || 0);
}
doc.setFont("helvetica", "bold"); doc.setFontSize(20); doc.setTextColor(...INK); doc.text("CATALOGUE INDEX", M, 24);
textBlock("Product families and model pages", M, 32, 170, 9, MUTED);
let iy = 47;
for (let i = 0; i < products.length; i++) {
  const p = products[i]; const cat = productCategories.find(c => c.id === p.category)?.label || p.categoryLabel;
  doc.setFillColor(i % 2 ? 255 : 246, i % 2 ? 255 : 248, i % 2 ? 255 : 251); doc.roundedRect(M, iy - 5, W - 2 * M, 12, 1.5, 1.5, "F");
  doc.setFont("helvetica", "bold"); doc.setFontSize(8.2); doc.setTextColor(...INK); doc.text(safe(p.name), M + 3, iy);
  doc.setFont("helvetica", "normal"); doc.setFontSize(7); doc.setTextColor(...MUTED); doc.text(safe(cat), M + 3, iy + 4);
  doc.setFont("helvetica", "bold"); doc.setTextColor(...BLUE); doc.text(String(familyPages[i].page), W - M - 3, iy + 1, { align: "right" });
  iy += 14;
}

const pages = [];
for (const p of products) {
  const models = p.variants?.length ? p.variants : [p];
  for (const model of models) pages.push({ p, model });
}
// One clean, full model detail page per model ensures every image and spec is readable.
const total = pages.length + 2;
for (let i = 0; i < pages.length; i++) {
  const { p, model } = pages[i];
  doc.addPage();
  header(p.name, model.name, i + 3, total);
  let y = 22;
  doc.setFont("helvetica", "bold"); doc.setFontSize(7.5); doc.setTextColor(...CYAN);
  doc.text(`${safe(p.categoryLabel)}${p.brand ? `  |  ${safe(p.brand)}` : ""}`, M, y); y += 7;
  doc.setFont("helvetica", "bold"); doc.setFontSize(17); doc.setTextColor(...INK);
  const titleLines = doc.splitTextToSize(safe(model.name || p.name), W - 2 * M);
  doc.text(titleLines, M, y); y += titleLines.length * 7 + 3;

  const imagePaths = [...new Set([model.image, ...(model.galleryImages || [])].filter(Boolean))];
  const mainPath = imagePaths[0] || p.image;
  drawImage(mainPath, M, y, 82, 66);
  let introY = y + 2;
  introY = textBlock(model.fullDescription || model.shortDescription || p.fullDescription || p.shortDescription || "", M + 88, introY, W - 2 * M - 88, 8.3, INK, "normal", 1.4) + 4;
  introY = textBlock(`Family: ${p.name}`, M + 88, introY, W - 2 * M - 88, 7.5, MUTED) + 3;
  const galleryImages = imagePaths.slice(1);
  if (galleryImages.length) {
    const thumbW = 24; const thumbH = 19; const gap = 3; const perRow = 6;
    galleryImages.forEach((galleryPath, thumbIndex) => {
      const row = Math.floor(thumbIndex / perRow); const col = thumbIndex % perRow;
      drawImage(galleryPath, M + col * (thumbW + gap), y + 68 + row * 22, thumbW, thumbH);
    });
    y += 72 + Math.ceil(galleryImages.length / perRow) * 22;
  } else y += 72;

  const applications = model.applications?.length ? model.applications : p.applications || [];
  if (applications.length) {
    y = sectionLabel("Applications", M, y);
    y = textBlock(applications.join("  |  "), M, y, W - 2 * M, 8, MUTED) + 5;
  }
  const benefits = model.keyBenefits?.length ? model.keyBenefits : p.keyBenefits || [];
  if (benefits.length) {
    y = sectionLabel("Key benefits", M, y);
    for (const benefit of benefits) {
      doc.setFillColor(...CYAN); doc.circle(M + 1.4, y - 1, 0.8, "F");
      y = textBlock(benefit, M + 5, y, W - 2 * M - 5, 7.8, INK) + 1.5;
    }
    y += 2;
  }
  const specs = model.specifications?.length ? model.specifications : p.specifications || [];
  if (specs.length) {
    y = sectionLabel("Specifications", M, y);
    const half = (W - 2 * M) / 2;
    for (let s = 0; s < specs.length; s += 2) {
      const pair = specs.slice(s, s + 2);
      const valueLineCounts = pair.map(spec => doc.splitTextToSize(safe(spec.value), half - 7).length);
      const rowH = Math.max(8.1, 6.2 + (Math.max(...valueLineCounts) - 1) * 2.4 + 2.2);
      for (let col = 0; col < 2 && s + col < specs.length; col++) {
        const spec = specs[s + col]; const x = M + col * half;
        doc.setFillColor((s / 2) % 2 ? 255 : 246, (s / 2) % 2 ? 255 : 248, (s / 2) % 2 ? 255 : 251);
        doc.roundedRect(x, y, half - 2, rowH - 0.6, 1, 1, "F");
        doc.setFont("helvetica", "bold"); doc.setFontSize(6.6); doc.setTextColor(...BLUE);
        doc.text(safe(spec.label), x + 2, y + 3);
        doc.setFont("helvetica", "normal"); doc.setFontSize(6.8); doc.setTextColor(...INK);
        const valueLines = doc.splitTextToSize(safe(spec.value), half - 7);
        doc.text(valueLines, x + 2, y + 6.2);
      }
      y += rowH;
    }
  }
  header(p.name, model.name, i + 3, total);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, Buffer.from(doc.output("arraybuffer")));
console.log(`Created ${OUT} with ${products.length} product families and ${pages.length} model pages.`);
