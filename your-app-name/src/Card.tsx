import { Component } from "react";
import * as React from "react";

class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="card-container">
          <header> 
            <h2>Jane Smith</h2>
          </header>

          <main>
            <ul>
              <li>
                <span>Birthday</span>Jan 1, 1980
              </li>
              <li>
                <span>Address</span>123 Fulton St.
              </li>
              <li>
                <span>Phone</span>123-456-7891
              </li>
            </ul>
          </main>
        </section>
      </React.Fragment>
    );
  }
}

export default Card;
