---
title: Button
description: Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as “view shipping settings”.
category: Actions
keywords:
  - CTA
  - call to action
  - call-to-action
  - primary
  - action
  - basic button
  - outline
  - plain
  - destructive
  - slim
  - large
  - full-width
  - disabled state
  - disabled
  - button
  - link
  - click
  - submit
---

## Best practices

Buttons should:

- Be clearly and accurately labeled.
- Lead with a strong, actionable verb.
- Use established button colors appropriately. For example, only use a red button for an action that’s difficult or impossible to undo.
- Prioritize the most important actions. Too many calls to action can cause confusion and make merchants unsure of what to do next.
- Be positioned in consistent locations in the interface.

### Buttons versus links

Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as “view shipping settings”.

Links are used primarily for navigation, and usually appear within or directly following a sentence.

The HTML that renders for the `Button` and `Link` components carries meaning. Using these components intentionally and consistently results in:

- a more inclusive experience for assistive technology users
- a more cohesive visual experience for sighted users
- products that are easier to maintain at scale

---

## Content guidelines

Buttons should follow the content guidelines for [buttons](https://polaris.shopify.com/content/actionable-language#buttons).

---

## Related components

- To combine or lay out multiple buttons, [use the button group component](https://polaris.shopify.com/components/button-group)
- For navigational actions that appear within or directly following a sentence, use the [link component](https://polaris.shopify.com/components/link)

---

## Accessibility

Buttons can have different states that are visually and programmatically conveyed to merchants.

- Use the `ariaControls` prop to add an `aria-controls` attribute to the button. Use the attribute to point to the unique `id` of the content that the button manages.
- If a button expands or collapses adjacent content, then use the `ariaExpanded` prop to add the `aria-expanded` attribute to the button. Set the value to convey the current expanded (`true`) or collapsed (`false`) state of the content.
- Use the `disabled` prop to set the `disabled` state of the button. This prevents merchants from being able to interact with the button, and conveys its inactive state to assistive technologies.
- Use the `pressed` prop to add an `aria-pressed` attribute to the button.

#### Navigation

Merchants generally expect buttons to submit data or take action, and for links to navigate. If navigation is required for the button component, use the `url` prop. The control will output an anchor styled as a button, instead of a button in HTML, to help convey this difference.

For more information on making accessible links, see the [link component](https://polaris.shopify.com/components/link).

### Labeling

The `accessibilityLabel` prop adds an `aria-label` attribute to the button, which can be accessed by assistive technologies like screen readers. Typically, this label text replaces the visible text on the button for merchants who use assistive technology.

Use `accessibilityLabel` for a button if:

- The button’s visible text doesn’t adequately convey the purpose of the button to non-visual merchants
- The button has no text and relies on an icon alone to convey its purpose

To help support merchants who use speech activation software as well as sighted screen reader users, make sure that the `aria-label` text includes any button text that’s visible. Mismatches between visible and programmatic labeling can cause confusion, and might prevent voice recognition commands from working.

When possible, give the button visible text that clearly conveys its purpose without the use of `accessibilityLabel`. When no additional content is needed, duplicating the button text with `accessibilityLabel` isn’t necessary.

#### External links

When you use the button component to create a link to an external resource:

- Use the `external` prop to make the link open in a new tab (or window, depending on the merchant’s browser settings)
- Use the `icon` prop to add the `external` icon to the button
- Use the `accessibilityLabel` prop to include the warning about opening a new tab in the button text for non-visual screen reader users

For more information on making accessible links, see the [link component](https://polaris.shopify.com/components/link).

### Keyboard support

Buttons use browser defaults for keyboard interactions.

- Give buttons keyboard focus with the <kbd>tab</kbd> key (or <kbd>shift</kbd> + <kbd>tab</kbd> when tabbing backwards)
- Activate buttons with the <kbd>enter</kbd>/<kbd>return</kbd> key or the <kbd>space</kbd> key

#### Custom key events

Use the `onKeyDown`, `onKeyPress`, and `onKeyUp` props to create custom events for buttons. With these props, you can use buttons to create complex, custom interactions like drag-and-drop interfaces.

Since these props introduce non-standard features to buttons, make sure to include accessible instructions so that merchants can understand how to use these features.
