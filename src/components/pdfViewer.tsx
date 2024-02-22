import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer() {
	const [pageNumber, setPageNumber] = useState<number>(1); // start on first page
	const [loading, setLoading] = useState(true);
	const [pageWidth, setPageWidth] = useState(0);
	const [path, setPath] = useState("");

	function onPageLoadSuccess() {
		setPageWidth(window.innerWidth);
		setLoading(false);
	}

	const options = {
		cMapUrl: "cmaps/",
		cMapPacked: true,
		standardFontDataUrl: "standard_fonts/",
	};

	useEffect(() => {

		function handleResize() {
			setPageWidth(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<div
				hidden={loading}
				style={{
					height: "auto", // Hauteur fixée à 80% de la hauteur de la fenêtre visible
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div style={{ width: "100%", maxWidth: "600px", display: "flex", justifyContent: "center" }}>
					<Document
						file={"/Cv_developper.pdf"}
						options={options}
						renderMode="canvas"
						className=""
					>
						<Page
							className=""
							key={pageNumber}
							pageNumber={pageNumber}
							renderAnnotationLayer={false}
							renderTextLayer={false}
							onLoadSuccess={onPageLoadSuccess}
							onRenderError={() => setLoading(false)}
							width={Math.max(pageWidth * 0.8, 390)}
						/>
					</Document>
				</div>
			</div>
		</>
	);
}
