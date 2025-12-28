import { createTheme, type MantineColorsTuple, rem } from "@mantine/core"

// Custom Ethereal Glass palette
const payfitViolet: MantineColorsTuple = [
  "#fdfcff", // 0
  "#f5f3ff", // 1
  "#ede9fe", // 2
  "#e9d5ff", // 3
  "#ddd6fe", // 4
  "#c4b5fd", // 5: Primary Brand (Ethereal)
  "#a78bfa", // 6
  "#8b5cf6", // 7
  "#7c3aed", // 8
  "#6d28d9", // 9
]

export const theme = createTheme({
  primaryColor: "payfit",
  colors: {
    payfit: payfitViolet,
  },
  defaultRadius: "md",
  cursorType: "pointer",
  fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",

  headings: {
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    fontWeight: "700",
    sizes: {
      h1: { fontSize: rem(32), lineHeight: "1.2" },
      h2: { fontSize: rem(26), lineHeight: "1.3" },
      h3: { fontSize: rem(20), lineHeight: "1.4" },
      h4: { fontSize: rem(18), lineHeight: "1.5" },
    }
  },

  components: {
    Button: {
      defaultProps: {
        radius: "md",
        size: "sm",
      },
      styles: {
        root: {
          transition: "transform 100ms ease, background-color 200ms ease, box-shadow 200ms ease",
          "&:active": {
            transform: "translateY(1px)",
          }
        },
      },
    },
    Card: {
      defaultProps: {
        radius: "lg",
        padding: "xl",
        shadow: "sm",
        withBorder: true,
      },
      styles: (theme: any) => ({
        root: {
          backgroundColor: "#fff",
          "&:hover": {
            boxShadow: theme.shadows.md,
          },
        },
      }),
    },
    Paper: {
      defaultProps: {
        radius: "lg",
        shadow: "xs",
        withBorder: true,
      },
    },
    TextInput: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
      styles: {
        input: {
          "&:focus": {
            borderColor: "var(--mantine-color-payfit-6)",
          }
        }
      }
    },
    Select: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    NavLink: {
      defaultProps: {
        variant: "filled",
        color: "payfit",
      },
      styles: {
        root: {
          borderRadius: rem(12),
          marginBottom: rem(4),
          fontWeight: 500,
          transition: "all 200ms ease",
        },
      },
    },
    Badge: {
      defaultProps: {
        radius: "sm",
        variant: "light",
      },
    }
  },

  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(139, 92, 246, 0.05)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(139, 92, 246, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(139, 92, 246, 0.05)",
  },
})
