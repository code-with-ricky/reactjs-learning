import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Without useCallback, `toggleTheme` would be a BRAND NEW function on every
  // single render of ThemeProvider (functions are recreated by default in JS
  // on every render of a component). A new function reference means any
  // consumer or memoized child relying on this function sees "it changed,"
  // even when its actual behavior is identical — causing wasted re-renders.
  //
  // useCallback(fn, deps) tells React: "only create a new function if `deps`
  // change." Here deps = [] (empty), so this function reference is created
  // ONCE and reused forever across re-renders.
  //
  // Why empty deps work: we use the functional updater form
  // `setTheme(prev => ...)` instead of reading `theme` directly. This means
  // toggleTheme never needs to "know" the current theme value — it just asks
  // React for whatever the latest value is at update time. If we'd written
  // `setTheme(theme === "light" ? "dark" : "light")` instead, we'd have had
  // to add `theme` to the dependency array, and the function reference would
  // change every time theme changes — defeating the optimization.
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  // Even with a stable `toggleTheme`, writing `value={{ theme, toggleTheme }}`
  // directly in JSX creates a NEW OBJECT LITERAL every render (object literals
  // are always new references in JS, just like functions). React Context
  // consumers re-render whenever the Provider's `value` reference changes —
  // so a fresh object every render means every consumer re-renders every
  // time ThemeProvider re-renders, REGARDLESS of whether theme actually
  // changed.
  //
  // useMemo(fn, deps) caches the returned object and only recomputes it when
  // something in `deps` actually changes. Here, deps = [theme, toggleTheme]:
  // - `theme` changes → new object created (correct — consumers SHOULD update)
  // - toggleTheme is stable (thanks to useCallback above) → doesn't trigger
  //   a new object on its own
  // - Any other reason ThemeProvider might re-render (e.g. parent re-renders,
  //   unrelated state changes) → `value` stays the SAME reference → consumers
  //   relying only on Context don't re-render unnecessarily.
  //
  // Rule of thumb: useCallback memoizes FUNCTIONS, useMemo memoizes VALUES
  // (objects/arrays/computed results). Context Providers almost always need
  // both together: useCallback for any functions in the value, useMemo
  // wrapping the final value object itself.
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
