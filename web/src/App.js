import React from "react";

import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="username_github">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">

            <div class="input-block">
              <label htmlFor="latidude">Latitude</label>
              <input name="latidude" id="latidude" required />
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>


      <main>

      <ul>
        <li className="dev-item">
          <header>
            <img src="" alt=""/>
            <div className="user-info">
              <strong>Rodrigo Spinelli</strong>
              <span>React, React Native, Node.js</span>
            </div>
          </header>
          <p>CTO na Rodrigo Spinelli Dev, apaixonado pelas melhores tecnologias</p>
        </li>

        <li className="dev-item">
          <header>
            <img src="" alt=""/>
            <div className="user-info">
              <strong>Rodrigo Spinelli</strong>
              <span>React, React Native, Node.js</span>
            </div>
          </header>
          <p>CTO na Rodrigo Spinelli Dev, apaixonado pelas melhores tecnologias</p>
        </li>

        <li className="dev-item">
          <header>
            <img src="" alt=""/>
            <div className="user-info">
              <strong>Rodrigo Spinelli</strong>
              <span>React, React Native, Node.js</span>
            </div>
          </header>
          <p>CTO na Rodrigo Spinelli Dev, apaixonado pelas melhores tecnologias</p>
        </li>

        <li className="dev-item">
          <header>
            <img src="" alt=""/>
            <div className="user-info">
              <strong>Rodrigo Spinelli</strong>
              <span>React, React Native, Node.js</span>
            </div>
          </header>
          <p>CTO na Rodrigo Spinelli Dev, apaixonado pelas melhores tecnologias</p>
        </li>

        <li className="dev-item">
          <header>
            <img src="" alt=""/>
            <div className="user-info">
              <strong>Rodrigo Spinelli</strong>
              <span>React, React Native, Node.js</span>
            </div>
          </header>
          <p>CTO na Rodrigo Spinelli Dev, apaixonado pelas melhores tecnologias</p>
        </li>
      </ul>

      </main>
    </div>
  );
}

export default App;
