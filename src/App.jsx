import { Provider } from "react-redux";
import { store } from "./store/store";
import TodoForm from "./components/todoinput";
import Todo from "./components/todo";
function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen w-full bg-gradient-to-b from-indigo-50 via-white to-pink-50 text-slate-800 px-4 py-10">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl p-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 mb-6">
            <header className="rounded-2xl bg-white px-6 py-5 text-center shadow-sm">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-600">Redux Todo</h1>
              <p className="text-slate-500 text-sm sm:text-base mt-1">Plan it. Do it. Done.</p>
            </header>
          </div>

          <div className="bg-white border border-slate-200 shadow-lg rounded-3xl p-4 sm:p-6">
            <TodoForm />
            <div className="h-px w-full bg-slate-200 my-4" />
            <Todo/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
