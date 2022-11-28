import jsPDF from 'jsPDF'

export default {
	name: 'home',
	data() {
		return {
			name: ''
		}
	},
	methods: {
		download () {
      let pdfName = 'test'; 
      var doc = new jsPDF();
      doc.text(this.name, 10, 10);
      doc.save(pdfName + '.pdf');
     }
	}
}



// // require dependencies
// import PDFDocument from 'pdfkit'
// import blobStream from 'blob-stream'

// export function download() {
//   // create a document
//   const doc = new PDFDocument;

//   // pipe the document to a blob
//   const stream = doc.pipe(blobStream());

//   // draw some text
//   doc.fontSize(25).text('Urban Tools', 100, 80);

//   // end and display the document
//   doc.end();
//   stream.on('finish', function() {
//     // iframe.src = stream.toBlobURL('application/pdf');
//   });
// }

