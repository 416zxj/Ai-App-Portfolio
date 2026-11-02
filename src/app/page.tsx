"use client";

import { useState, type FormEvent } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!question.trim()) {
      setError("Please enter a question.");
      setResponse("");
      return;
    }

    setError("");
    setResponse("");
    setIsGenerating(true);

    window.setTimeout(() => {
      setResponse(
        "This is a simulated response. Your AI model integration will appear here next.",
      );
      setIsGenerating(false);
    }, 500);
  }

  return (
    <main className="relative flex min-h-screen flex-1 items-center justify-center overflow-hidden bg-slate-950 px-4 py-12 text-slate-100 sm:px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-48 -right-32 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <section className="relative w-full max-w-2xl">
        <div className="mb-6 flex items-center gap-2 text-sm font-medium text-cyan-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />
          Learning in public
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl sm:p-10">
          <div className="mb-8">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              AI Application Portfolio
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              I am learning to build reliable LLM-powered applications.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <label
              htmlFor="question"
              className="mb-2 block text-sm font-medium text-slate-200"
            >
              Ask a question
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="question"
                name="question"
                type="text"
                value={question}
                onChange={(event) => {
                  setQuestion(event.target.value);
                  if (error) setError("");
                }}
                placeholder="What would you like to explore?"
                autoComplete="off"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "question-error" : undefined}
                className="h-12 min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/70 focus:ring-4 focus:ring-cyan-400/10"
              />
              <button
                type="submit"
                disabled={isGenerating}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/25 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isGenerating && (
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950"
                  />
                )}
                {isGenerating ? "Generating..." : "Generate"}
              </button>
            </div>

            <div className="min-h-6 pt-2" aria-live="polite">
              {error && (
                <p
                  id="question-error"
                  className="text-sm font-medium text-rose-300"
                >
                  {error}
                </p>
              )}
            </div>
          </form>

          {(isGenerating || response) && (
            <div
              className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5"
              aria-live="polite"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Response
              </p>
              {isGenerating ? (
                <div className="space-y-2" aria-label="Generating response">
                  <div className="h-3 w-4/5 animate-pulse rounded bg-slate-700" />
                  <div className="h-3 w-full animate-pulse rounded bg-slate-700" />
                  <div className="h-3 w-2/3 animate-pulse rounded bg-slate-700" />
                </div>
              ) : (
                <p className="leading-7 text-slate-200">{response}</p>
              )}
            </div>
          )}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-slate-500">
          This is a local simulation. No model request is sent yet.
        </p>
      </section>
    </main>
  );
}
