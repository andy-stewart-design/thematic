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
          document.documentElement.dataset[e.type] = e.value;
        }}
      />

      <ThemedSurface mode={{ role: "secondary" }}>
        <ThemedSurface mode={{ role: "tertiary" }} />
      </ThemedSurface>

      <ThemedSurface mode={{ theme: "lilac" }}>
        <ThemedSurface mode={{ theme: "blue", role: "primary" }} />

        <ThemedSurface mode={{ role: "secondary" }}>
          <ThemedSurface mode={{ role: "tertiary" }} />
        </ThemedSurface>

        <ThemedSurface mode={{ theme: "green", role: "primary" }}>
          <ThemedSurface mode={{ role: "secondary" }}>
            <ThemedSurface mode={{ role: "tertiary" }} />
          </ThemedSurface>
        </ThemedSurface>
      </ThemedSurface>

      <ThemedSurface mode={{ scheme: "inverted" }} />
    </div>
  );
}

export default SimpleExample;
