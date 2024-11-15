<div align="center">

<p align="center">
  <img src="https://github.com/Kingrashy12/stylrjs/blob/main/images/stylrjs.png" alt="StylrJS" width="150" height="150">
  <h4> A Lightweight CSS-In-JS library for React </h4>
</p>

[![GitHub stars](https://img.shields.io/github/stars/Kingrashy12/stylrjs.svg?style=social&label=Star)](https://github.com/Kingrashy12/stylrjs)
[![npm version](https://img.shields.io/npm/v/stylrjs.svg)](https://www.npmjs.com/package/stylrjs)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/stylrjs)](https://bundlephobia.com/result?p=stylrjs)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/Kingrashy12/stylrjs/blob/main/LICENSE)
[![module formats](https://img.shields.io/badge/module%20formats-ESM%2FCJS%2FUMD-blue)](https://www.npmjs.com/package/stylrjs)

[Documentation](https://github.com/Kingrashy12/stylrjs/wiki) | [API Reference](https://github.com/Kingrashy12/stylrjs#api-reference) | [Contributing](https://github.com/Kingrashy12/stylrjs/blob/main/CONTRIBUTING.MD) | [Issues](https://github.com/Kingrashy12/stylrjs/issues)

</div>

<p align="center">
  <sub>Built with ❤️ by <a href="https://github.com/Kingrashy12">@Kingrashy12</a>. Licensed under the Apache License 2.0.</sub>
</p>

##

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Why Use StylrJS](#why-use-stylrjs)
- [NextJs Setup](#nextjs-setup)
- [Usage](#usage)
- [Using With Types](#using-with-types)
- [Exported Types](#exported-types)
- [API Reference](#api-reference)
- [License](#license)
- [Issues](#issues)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Installation

npm:

```bash
npm install stylrjs
```

yarn:

```bash
yarn add stylrjs
```

## Features

- Intuitive API for easy styling
- Type-safe styling with TypeScript support
- Performance optimized with minimal runtime overhead
- Customizable and extendable
- Automatic vendor prefixing for cross-browser compatibility
- No dependencies on external libraries
- Filters invalid props from being passed to the DOM
- Supports dynamic styling based on props

## Why Use StylrJS?

StylrJS offers a modern, efficient, and intuitive approach to styling your applications. Here are some key reasons to choose StylrJS:

### 1. **Automatic Prop Filtering and Conversion**

- Props not recognized by React (e.g., `variant`) are automatically converted into valid `data-*` attributes (e.g., `data-variant`), ensuring clean and valid HTML while preventing unnecessary props from being passed to the DOM.

### 2. **TypeScript-Friendly**

- Fully compatible with TypeScript, providing type definitions for all HTML elements.
- Supports type-safe custom props, ensuring a seamless development experience.

### 3. **Minimal Learning Curve**

- If you're familiar with CSS and JavaScript, getting started with StylrJS is straightforward.
- Leverages tagged template literals, making it easy to write styles in a familiar syntax.

### 4. **Component-Centric Styling**

- Encourages styling directly within components, enhancing cohesion and maintainability.
- Avoids global CSS conflicts by scoping styles to specific components.

### 5. **Custom Component Styling**

- Easily style third-party or custom React components while preserving their original props.
- Integrates seamlessly into both functional and class components.

### 6. **Dynamic Styling**

- Write dynamic styles using props, enabling conditional and reusable styles.
- Simplifies styling logic by co-locating styles with components.

### 7. **Lightweight and Performant**

- Optimized for performance, ensuring minimal runtime overhead.
- Produces highly efficient, scoped CSS without bloating your app.

### 8. **Next.js Compatibility**

- StylrJS currently uses a `StylrJsRegistry` component to collect and render styles for server-side rendering (SSR).
- This approach ensures styles are correctly included during the initial server-side render of your application.
- **Coming Soon:** The registry process will be handled automatically, making SSR integration even more seamless.

## NextJs Setup

StylrJs comes with a CLI tool to streamline setting up your project with Next.js.

1. **Initialize StylrJs Registry**

Run the following command to generate the required setup files:

```bash
npx stylrjs init
```

This command will create a `StylrJsRegistry` component and add it to your project at `lib/registry.js` or `lib/registry.tsx` file.

2. **Import StylrJsRegistry into your root layout**

Next, import the `StylrJsRegistry` component in your `layout.js` or `layout.tsx` file:

- `app/layout` for App Router
- `src/layout` for Pages Router

- **TypeScript**

```bash
import StylrJsRegistry from '@/lib/registry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <body>
        <StylrJsRegistry>{children}</StylrJsRegistry>
      </body>
    </html>
  );
}
```

- **JavaScript**

```bash
import StylrJsRegistry from '@/lib/registry';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StylrJsRegistry>{children}</StylrJsRegistry>
      </body>
    </html>
  );
}
```

> **Note:** When using the `styled` API in the Next.js App Router, you must include the `'use client'` directive at the top of the file. No need to worry about style glitches—StylrJs ensures smooth styling across your app.

## Usage

Basic example:

```tsx
import { styled } from "stylrjs";

const Button = styled("button")`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

export default Button;
```

## Using StylrJS with TypeScript

StylrJS is fully compatible with TypeScript and provides type definitions for all HTML elements. Here's how you can use it effectively with types:

1. Basic usage with inferred types:

```tsx
import { styled } from "stylrjs";

const Button = styled("button")`
  background-color: blue;
  color: white;
  padding: 10px 20px;
`;

// Button will automatically have the correct HTML button element props
```

2. Extending HTML element props:

```tsx
import { styled, ButtonProps } from "stylrjs";

interface CustomButtonProps extends ButtonProps {
  isActive?: boolean;
}

const Button = styled<CustomButtonProps>("button")`
  background-color: ${(props) => (props.isActive ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
`;

// Usage
<Button isActive onClick={() => console.log("Clicked!")}>
  Click me
</Button>;
```

3. Using with custom components:

```tsx
import { styled } from "stylrjs";
import { ComponentProps } from "react";

const CustomComponent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <div className={className}>{children}</div>;

// Use ComponentProps to inherit props from the custom component.
// Only extend props when adding style to an existing component.
interface StyledCustomComponentProps
  extends ComponentProps<typeof CustomComponent> {
  backgroundColor?: string;
}

const StyledCustomComponent = styled<StyledCustomComponentProps>(
  CustomComponent
)`
  background-color: ${(props) => props.backgroundColor || "white"};
  padding: 20px;
`;

// Usage
<StyledCustomComponent backgroundColor="lightblue">
  Custom styled component
</StyledCustomComponent>;
```

### Why Use TypeScript with StylrJS?

- **Type Safety**: Prevent runtime errors with compile-time checks.
- **Autocomplete Support**: Get IntelliSense for HTML attributes and custom props.
- **Enhanced Readability**: Clearly define props for components, improving code maintainability.

## Exported Types

StylrJS exports type definitions for all HTML elements. You can import these types from `stylrjs`. Here's a list of all exported types:

- `ButtonProps`
- `AnchorProps`
- `InputProps`
- `TextareaProps`
- `SelectProps`
- `FormProps`
- `ImageProps`
- `DivProps`
- `SpanProps`
- `ParagraphProps`
- `ListItemProps`
- `UnorderedListProps`
- `OrderedListProps`
- `TableProps`
- `TableRowProps`
- `TableCellProps`
- `HeaderProps`
- `LabelProps`
- `ArticleProps`
- `SectionProps`
- `NavProps`
- `AsideProps`
- `FooterProps`
- `MainProps`
- `AddressProps`
- `AudioProps`
- `VideoProps`
- `CanvasProps`
- `EmbedProps`
- `IFrameProps`
- `ObjectProps`
- `PictureProps`
- `SourceProps`
- `TrackProps`
- `DetailsProps`
- `DialogProps`
- `MenuProps`
- `SummaryProps`
- `DataProps`
- `TimeProps`
- `VarProps`
- `CodeProps`
- `PreProps`
- `BlockquoteProps`
- `CiteProps`
- `DelProps`
- `InsProps`
- `KbdProps`
- `MarkProps`
- `QProps`
- `SProps`
- `SampProps`
- `StrongProps`
- `SubProps`
- `SupProps`
- `WbrProps`
- `AreaProps`
- `MapProps`
- `ColProps`
- `ColGroupProps`
- `CaptionProps`
- `THeadProps`
- `TBodyProps`
- `TFootProps`
- `ThProps`
- `FieldsetProps`
- `LegendProps`
- `DatalistProps`
- `OptGroupProps`
- `OptionProps`
- `OutputProps`
- `ProgressProps`
- `MeterProps`
- `HtmlProps`
- `HeadProps`
- `BaseProps`
- `MetaProps`
- `ScriptProps`
- `NoScriptProps`
- `TemplateProps`
- `SlotProps`

You can use these types to extend the props of your styled components or to type-check your components. For example:

```tsx
import { styled, ButtonProps } from "stylrjs";

interface CustomButtonProps extends ButtonProps {
  isActive?: boolean;
}

const Button = styled<CustomButtonProps>("button")`
  // ... styles ...
`;
```

This ensures type safety and provides autocompletion for all standard HTML attributes plus your custom props.

## API Reference

### `styled`

The `styled` function is the core function for creating styled components. It takes a tag name as an argument and returns a new component that applies the styles to the specified HTML element.

#### Parameters

- `tag: keyof JSX.IntrinsicElements` - The HTML tag to be styled.

#### Returns

- `React.FC<any>` - A new React functional component that renders the styled element.

### `styled('div')`, `styled('span')`, etc.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for more details.

## Issues

If you find any issues, please open an issue on the [GitHub repository](https://github.com/Kingrashy12/StylrJS/issues).

## Contributing

We welcome contributions to StylrJS! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

For more detailed information on how to contribute, please read our [CONTRIBUTING.md](CONTRIBUTING.md) guide.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/)
- [Babel](https://babeljs.io/)
