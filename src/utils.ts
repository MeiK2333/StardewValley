export async function loadXmlFile(file: File): Promise<Document> {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsText(file!, "UTF-8");
    reader.onload = (event) => {
      const domParse = new DOMParser();
      if (event.target === null || event.target.result === null) {
        rej("target is null!");
        return;
      }
      try {
        const str: string = event.target.result as string;
        const tree = domParse.parseFromString(str, "text/xml");
        res(tree);
      } catch (err) {
        rej(err);
      }
    };
  });
}

export function downloadXmlFile(tree: Document, filename: string) {
  const data = new XMLSerializer().serializeToString(tree);
  const url = window.URL.createObjectURL(
    new Blob([data], { type: "applacation/xml" })
  );
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
}
