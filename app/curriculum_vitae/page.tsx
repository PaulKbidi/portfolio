export default function PdfViewer() {
  return (
    <div className="w-full h-screen">
      <object
        data="/curriculum_vitae.pdf"
        type="application/pdf"
        className="w-full h-full"
      >
      </object>
    </div>
  );
}
