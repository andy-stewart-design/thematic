import {
  children,
  createSignal,
  createUniqueId,
  For,
  type ComponentProps,
} from "solid-js";
import { Dynamic } from "solid-js/web";
import {
  roles,
  schemes,
  themes,
  type RoleOption,
  type SchemeOption,
  type ThemeOption,
} from "../simple-example/constants";
import s from "./style.module.css";

interface Props extends ComponentProps<"div"> {
  title?: string;
  mode?: Partial<{
    theme: ThemeOption;
    scheme: SchemeOption;
    role: RoleOption;
  }>;
  onModeChange?: ({ type, value }: ModeChangeEvent) => void;
  root?: boolean;
}

type SchemeChangeEvent = { type: "scheme"; value: SchemeOption };
type ThemeChangeEvent = { type: "theme"; value: ThemeOption };
type RoleChangeEvent = { type: "role"; value: RoleOption };
type ModeChangeEvent = SchemeChangeEvent | ThemeChangeEvent | RoleChangeEvent;

export default function ThemedSurface(props: Props) {
  const [scheme, setScheme] = createSignal<SchemeOption>(props.mode?.scheme);
  const [theme, setTheme] = createSignal<ThemeOption>(props.mode?.theme);
  const [role, setRole] = createSignal<RoleOption>(props.mode?.role);
  const id = createUniqueId();
  const resolvedChildren = children(() => props.children);

  const titleTag = props.root ? "h1" : "h2";

  function handleChange(e: ModeChangeEvent) {
    if (props.onModeChange) {
      props.onModeChange(e);
      return;
    }

    if (e.type === "scheme") setScheme(e.value);
    else if (e.type === "theme") setTheme(e.value);
    else setRole(e.value);
  }

  return (
    <div
      class={s.surface}
      data-root={props.root ?? false}
      data-theme={theme()}
      data-scheme={scheme()}
      data-role={role()}
    >
      <Dynamic component={titleTag}>{props.title ?? "Child element"}</Dynamic>

      <div class={s.radiogroups}>
        <div class={s.radiogroup}>
          <span class={s.label}>Color scheme:</span>

          <For each={schemes}>
            {(option) => (
              <label class={s.option}>
                <input
                  type="radio"
                  name={`${id}-scheme`}
                  value={option.value}
                  checked={scheme() === option.value}
                  onChange={() =>
                    handleChange({ type: "scheme", value: option.value })
                  }
                  disabled={props.root && option.value === "inverted"}
                />
                {props.root && !option.value ? "System" : option.label}
              </label>
            )}
          </For>
        </div>

        <div class={s.radiogroup}>
          <span class={s.label}>Theme:</span>

          <For each={themes}>
            {(option) => (
              <label class={s.option}>
                <input
                  type="radio"
                  name={`${id}-theme`}
                  value={option.value}
                  checked={theme() === option.value}
                  onChange={() =>
                    handleChange({ type: "theme", value: option.value })
                  }
                />
                {props.root && !option.value ? "Default" : option.label}
              </label>
            )}
          </For>
        </div>

        <div class={s.radiogroup}>
          <span class={s.label}>Role:</span>

          <For each={roles}>
            {(option) => (
              <label class={s.option}>
                <input
                  type="radio"
                  name={`${id}-role`}
                  value={option.value}
                  checked={role() === option.value}
                  onChange={() =>
                    handleChange({ type: "role", value: option.value })
                  }
                />
                {props.root && !option.value ? "Default" : option.label}
              </label>
            )}
          </For>
        </div>
      </div>

      {resolvedChildren() && (
        <div class={s.content}>{resolvedChildren()}</div>
      )}
    </div>
  );
}
