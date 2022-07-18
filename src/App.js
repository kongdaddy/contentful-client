import * as contentful from "contentful";
import { useEffect, useState } from "react";
import { P2GPage } from "./P2GPage";

function App() {
  const [pageContent, setPageContent] = useState(null);

  var client = contentful.createClient({
    space: "83st4omzedqx",
    accessToken: "jNfXMQSZM0NwfgKsRXPe-toXhDMc11-tWwpSRYITGv8",
  });

  useEffect(() => {
    // Fetching Contentful contenTypes could be done via component hooks
    // e.g. useP2GPage() hook
    client.getEntry("7gG21OCN4KfvvnwdQSz14G").then((entry) => {
      if (pageContent == null) {
        const content = {
          hero: {
            url: "https:" + entry.fields.hero[0].fields.file.url,
          },
        };
        setPageContent(content);
      }
    });
  }, []);

  return (
    <div>
      <P2GPage content={pageContent} />
    </div>
  );
}

export default App;
