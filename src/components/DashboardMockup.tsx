export function DashboardMockup() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-2xl border overflow-hidden">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 bg-muted rounded-md text-xs text-muted-foreground">
            app.dialogai.io
          </div>
        </div>
      </div>

      {/* Chat interface */}
      <div className="p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-medium">AI</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">Чем могу помочь?</h2>
          <p className="text-sm text-muted-foreground">
            Ваш AI-ассистент готов к работе
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="border rounded-lg p-3 flex items-center gap-3">
            <input
              type="text"
              placeholder="Спросите что угодно..."
              className="flex-1 text-sm outline-none bg-transparent"
              readOnly
            />
            <button className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0">
              <span className="text-white text-sm">&#8593;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
