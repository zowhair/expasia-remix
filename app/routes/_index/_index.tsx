import type { MetaFunction } from "@remix-run/node";
import { LinksFunction } from "@remix-run/node";
import indexStyles from "./index_style.css";

export const IndexStyles: LinksFunction = () => [
  {
      rel: "stylesheet", href: indexStyles
  }
]
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="homepage">
        <h1 className="homepage-title">Expedition Asia Trek & Tours!</h1>
      
      <div className="central">
          <div className="container">
            <div className="title-item-wrapper">
              <div className="border left"></div>
              <h1 className="h1">most popular pakages</h1>
              <div className="border right"></div>
          </div>
          <div className="row">
            <div className="card-body">
              <div className="card bottom">
                <img src="https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg?fmt=webp&w=350" />
                <div className="small-wrapper">
                  <span className="small">learn more</span>
                  <div className="curve"></div>

                </div>
                <div className="img-title-wrapper">
                  <div className="black-strip">
                    <h2 className="img-title-h2">paris and border</h2>
                    <span className="price"> 87567</span>
                  </div>
                </div>
              </div>
                <div className="date">
                  <p>11 Nov 2013 - 22 Nov 2013</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
