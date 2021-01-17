import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer class="footer bg-dark py-5">
      <div class="container grid grid-3">
        <div>
          <h1>Loruki</h1>
          <p>Copyright &copy; 2020</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Fetures</Link>
            </li>
            <li>
              <Link to="/docs">Docs</Link>
            </li>
          </ul>
        </nav>
        <div class="social">
          <a href="#">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
