import NavBar from "@/components/navbar";
import path from "path";
import fs from "fs/promises";

function HomePage(props) {
  const { templates } = props;
  console.log(templates);
  return (
    <div className="relative">
      <NavBar />
      <div className="container mx-auto px-4 bg-gray-100">
        <div className="columns-1 lg:columns-2 px-2 text-black">
          <ul>
            {templates.map((template) => {
              return <li key={template.id}>{template.title}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "templates.json");
  const jsonData = await fs.readFile(filePath);
  console.log(jsonData);
  const data = JSON.parse(jsonData);
  console.log(data);
  return {
    props: {
      templates: data.templates,
    },
    revalidate: 10,
  };
}

export default HomePage;
