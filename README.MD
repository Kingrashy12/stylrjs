---

<div align="center">

<p align="center">
  <img src="https://github.com/Kingrashy12/chromajs/blob/main/images/chromajs-logo.png" alt="Chromajs" width="200" height="200">
  <h4> A Lightweight CSS-In-JS library for React </h4>
</p>

[![GitHub stars](https://img.shields.io/github/stars/Kingrashy12/chromajs.svg?style=social&label=Star)](https://github.com/Kingrashy12/chromajs)
[![npm version](https://img.shields.io/npm/v/chromajs.svg)](https://www.npmjs.com/package/chromajs)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/chromajs)](https://bundlephobia.com/result?p=chromajs)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/Kingrashy12/chromajs/blob/main/LICENSE)
[![module formats](https://img.shields.io/badge/module%20formats-ESM%2FCJS%2FUMD-blue)](https://www.npmjs.com/package/chromajs)

[Documentation](https://github.com/Kingrashy12/chromajs/wiki) | [API Reference](https://github.com/Kingrashy12/chromajs#api-reference) | [Contributing](https://github.com/Kingrashy12/chromajs/blob/main/CONTRIBUTING.MD) | [Issues](https://github.com/Kingrashy12/chromajs/issues)

</div>

<p align="center">
  <sub>Built with ❤️ by <a href="https://github.com/Kingrashy12">@Kingrashy12</a>. Licensed under the Apache License 2.0.</sub>
</p>

##

## Table of Contents

- [Installation](#installation)
- [Features](#features)
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
npm install chromajs
```

yarn:

```bash
yarn add chromajs
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

## Usage

Basic example:

```tsx
import { styled } from "chromajs";

const Button = styled("button")`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

export default Button;
```

## Using With Types

chromajs is fully compatible with TypeScript and provides type definitions for all HTML elements. Here's how you can use it with types:

1. Basic usage with inferred types:

```tsx
import { styled } from "chromajs";

const Button = styled("button")`
  background-color: blue;
  color: white;
  padding: 10px 20px;
`;

// Button will automatically have the correct HTML button element props
```

2. Extending HTML element props:

```tsx
import { styled } from "chromajs";

interface CustomButtonProps {
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
import { styled } from "chromajs";
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

By leveraging TypeScript with chromajs, you get full type checking for your styled components, including autocomplete for HTML attributes and custom props.

## Exported Types

chromajs exports type definitions for all HTML elements. You can import these types from `chromajs/dist/types`. Here's a list of all exported types:

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
import { styled, ButtonProps } from "chromajs";

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

If you find any issues, please open an issue on the [GitHub repository](https://github.com/Kingrashy12/chromajs/issues).

## Contributing

We welcome contributions to chromajs! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

For more detailed information on how to contribute, please read our [CONTRIBUTING.md](CONTRIBUTING.md) guide.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/)
- [Babel](https://babeljs.io/)
