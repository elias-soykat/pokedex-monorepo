import type { Preview } from "@storybook/react";
import "../../pokedex-app/tailwind.config";
import "../src/styles/globals.css";
import "@repo/components/styles.css";

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

