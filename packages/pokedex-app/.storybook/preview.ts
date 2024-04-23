import "@repo/components/styles.css";
import type { Preview } from "@storybook/react";
import "../../pokedex-app/tailwind.config";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

