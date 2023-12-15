import { render, screen } from "@testing-library/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";

describe("HomePage Component", () => {
  test("should render Home Page with header", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Router>
    );

    // Check if header is render
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toBeInTheDocument();
        // Check if searchbar is render
    const searchBarElement = screen.getByRole('textbox');
    expect(searchBarElement).toBeInTheDocument();

  });
});
