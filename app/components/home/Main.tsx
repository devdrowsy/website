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
          I'm currently a senior in high school located in California and I'm
          passionate about web development.
        </p>
        <p>
          I hope to work in the industry as a software engineer and so I am
          trying to rack up some experience via personal projects, open source
          contributions, and hackathons (the ones that allow me to come in
          haha).
        </p>
        <p>
          You can see some of the stuff I'm working on in the{' '}
          <Link to="/projects">projects page</Link>.
        </p>
      </section>
    </main>
  );
}
