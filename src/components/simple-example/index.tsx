import ThemedSurface from "../themed-surface";

function SimpleExample() {
  return (
    <div
      style={{ display: "grid", gap: "1.5rem" }}
      // data-scheme={scheme()}
    >
      <ThemedSurface
        title="Root element"
        root
        onModeChange={(e) => {
          if (e.value === undefined) {
            delete document.documentElement.dataset[e.type];
          } else {
            document.documentElement.dataset[e.type] = e.value;
          }
        }}
      />

      <ThemedSurface mode={{ scope: "secondary" }}>
        <ThemedSurface mode={{ scope: "tertiary" }} />
      </ThemedSurface>

      <ThemedSurface mode={{ theme: "lilac" }}>
        <ThemedSurface mode={{ theme: "blue", scope: "primary" }} />

        <ThemedSurface mode={{ scope: "secondary" }}>
          <ThemedSurface mode={{ scope: "tertiary" }} />
        </ThemedSurface>

        <ThemedSurface mode={{ theme: "green", scope: "primary" }}>
          <ThemedSurface mode={{ scope: "secondary" }}>
            <ThemedSurface mode={{ scope: "tertiary" }} />
          </ThemedSurface>
        </ThemedSurface>
      </ThemedSurface>

      <ThemedSurface mode={{ scheme: "inverted" }} />
    </div>
  );
}

export default SimpleExample;
