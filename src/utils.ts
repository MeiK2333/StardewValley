export function createXmlElement(str: string) {
  const domParser = new DOMParser();
  const tree = domParser.parseFromString(
    `<SaveGame xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">` +
      str +
      `</SaveGame>`,
    "text/xml"
  );
  const elem = tree as unknown as Element;
  return elem.firstChild!.firstChild! as Element;
}

export async function loadXmlFile(file: File): Promise<Element> {
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
        res(tree as unknown as Element);
      } catch (err) {
        rej(err);
      }
    };
  });
}

export function downloadXmlFile(tree: Element, filename: string) {
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
