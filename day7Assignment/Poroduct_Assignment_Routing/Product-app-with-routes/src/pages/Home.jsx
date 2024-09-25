import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="max-w-4xl mx-auto p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
            What is React Router DOM?
          </h1>
        </header>
        <section className="bg-white shadow-lg rounded-lg p-6">
          <p className="leading-relaxed text-lg mb-6">
            React Router DOM is an <strong>npm package</strong> that enables you to implement 
            dynamic routing in a web app. It allows you to display different pages and 
            enable users to navigate between them without refreshing the page.
          </p>

          <p className="leading-relaxed text-lg mb-6">
            It is a fully-featured client and server-side routing library for React, 
            often used to build <strong>Single-Page Applications (SPAs)</strong>. SPAs have multiple 
            pages or components, but the page is never refreshed — instead, the content 
            is dynamically fetched based on the URL. This process is called <strong>Routing</strong>, 
            and React Router DOM simplifies this task.
          </p>

          <p className="leading-relaxed text-lg mb-6">
            The major advantage of <strong>React Router</strong> is that the page does not need to be 
            refreshed when navigating to another page. Moreover, it’s extremely fast 
            compared to traditional navigation, providing a better user experience 
            and performance.
          </p>
        </section>
        <section className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Key Components in React Router DOM v6
          </h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Router (BrowserRouter):</strong> Acts as the parent component that wraps 
              all of the routing logic. Everything within this component is part of the 
              routing functionality.
            </li>
            <li>
              <strong>Routes:</strong> Defines all navigation paths within the app. Routes 
              determine which components should be rendered based on the URL.
            </li>
            <li>
              <strong>Route:</strong> This component checks the current URL and displays 
              the corresponding component if the URL matches the path.
            </li>
            <li>
              <strong>Link:</strong> Used to create navigational links to different routes 
              without refreshing the page.
            </li>
          </ul>
        </section>

        <section className="bg-blue-50 shadow rounded-lg p-6 mt-8">
          <h3 className="text-xl font-medium text-blue-600 mb-4">
            How Routes Work
          </h3>
          <p className="leading-relaxed text-lg mb-6">
            The <strong>Route</strong> component accepts two main parameters:
          </p>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Path:</strong> This is the URL path that will be matched (e.g., `/about`).
            </li>
            <li>
              <strong>Element:</strong> The component that will be displayed when the path matches the current URL.
            </li>
          </ol>
        </section>
      </main>

      <footer className="text-center py-4 mt-12 border-t bg-gray-100">
        <p className="text-sm text-gray-600">
          &copy; 2024 Guddu Tiwari
        </p>
      </footer>
    </div>
  );
};

export default Home;
