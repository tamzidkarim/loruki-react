import React from 'react';
import Layout from '../layouts/Layout';

export default function Home() {
  return (
    <>
      <Layout>
        <section class="showcase">
          <div class="container grid">
            <div class="showcase-text">
              <h1>Easier Deployment</h1>
              <p>
                Deploy web apps of all kinds, from large scale enterprise APIs
                to static websites for individuals. Fill out the form to try a
                demo of our platform
              </p>
              <a href="features.html" class="btn btn-outline">
                Read More
              </a>
            </div>

            <div class="showcase-form card">
              <h2>Request a Demo</h2>

              <form>
                <div class="form-control">
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div class="form-control">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    required
                  />
                </div>
                <div class="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <input type="submit" value="Send" class="btn btn-primary" />
              </form>
            </div>
          </div>
        </section>
        <section class="stats">
          <div class="container">
            <h3 class="stats-heading text-center my-1">
              Welcome to the best platform for building applications of all
              types with modern architecture and scaling
            </h3>

            <div class="grid grid-3 text-center my-4">
              <div>
                <i class="fas fa-server fa-3x"></i>
                <h3>10,349,405</h3>
                <p class="text-secondary">Deployments</p>
              </div>
              <div>
                <i class="fas fa-upload fa-3x"></i>
                <h3>987 TB</h3>
                <p class="text-secondary">Published</p>
              </div>
              <div>
                <i class="fas fa-project-diagram fa-3x"></i>
                <h3>2,343,265</h3>
                <p class="text-secondary">Projects</p>
              </div>
            </div>
          </div>
        </section>
        <section class="cli">
          <div class="container grid">
            <img src="images/cli.png" alt="" />
            <div class="card">
              <h3>Easy to use, cross platform CLI</h3>
            </div>
            <div class="card">
              <h3>Deploy in seconds</h3>
            </div>
          </div>
        </section>
        <section class="cloud bg-primary my-2 py-2">
          <div class="container grid">
            <div class="text-center">
              <h2 class="lg">Extreme Cloud Hosting</h2>
              <p class="lead my-1">
                Cloud hosting like you've never seen. Fast, efficient and
                scalable
              </p>
              <a href="features.html" class="btn btn-dark">
                Read More
              </a>
            </div>
            <img src="images/cloud.png" alt="" />
          </div>
        </section>
        <section class="languages">
          <h2 class="md text-center my-2">Supported Languages</h2>
          <div class="container flex">
            <div class="card">
              <h4>Node.js</h4>
              <img src="images/logos/node.png" alt="" />
            </div>
            <div class="card">
              <h4>Python</h4>
              <img src="images/logos/python.png" alt="" />
            </div>
            <div class="card">
              <h4>C#</h4>
              <img src="images/logos/csharp.png" alt="" />
            </div>
            <div class="card">
              <h4>Ruby</h4>
              <img src="images/logos/ruby.png" alt="" />
            </div>
            <div class="card">
              <h4>PHP</h4>
              <img src="images/logos/php.png" alt="" />
            </div>
            <div class="card">
              <h4>Scala</h4>
              <img src="images/logos/scala.png" alt="" />
            </div>
            <div class="card">
              <h4>Clojure</h4>
              <img src="images/logos/clojure.png" alt="" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
