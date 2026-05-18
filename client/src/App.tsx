import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Blueprint from "./pages/Blueprint";
import Edge from "./pages/Edge";
import PointBreak from "./pages/PointBreak";
import Feedback from "./pages/Feedback";
import AboutUs from "./pages/AboutUs";
import ForTeachers from "./pages/ForTeachers";
import Events from "./pages/Events";
import Blog from "./pages/Blog";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blueprint"} component={Blueprint} />
      <Route path={"/edge"} component={Edge} />
      <Route path={"/pointbreak"} component={PointBreak} />
      <Route path={"/feedback"} component={Feedback} />
      <Route path={"/about"} component={AboutUs} />
      <Route path={"/para-professores"} component={ForTeachers} />
      <Route path={"/eventos"} component={Events} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
