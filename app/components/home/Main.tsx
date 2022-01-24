import { Link } from 'remix';

export function Main() {
  return (
    <main>
      <img src="/drowsy.jpeg" />
      <section>
        <p>
          Hi, I'm <strong>Drousey</strong>! I'm also known as{' '}
          <strong>@devdrowsy</strong> due to the fact that I'm an insomniac 😅.
          <br />
          I'm based in California where I'm currently a sophomore in uni and I'm
          passionate about web development.
        </p>
        <p>
          I plan to work in the industry as a software engineer and I have been
          racking up some experience via personal projects and freelancing.
        </p>
        <p>
          Most of the stuff I've worked on is closed source/private, but I plan
          to update my <Link to="/projects">projects page</Link> soon with
          public facing projects.
        </p>
      </section>
    </main>
  );
}
