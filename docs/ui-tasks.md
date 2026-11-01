# UI Package Tasks (packages/ui)

---

# 1️⃣ Theme Foundation

## System Setup

- [x] Create theme folder
- [x] Create theme/index.ts
- [x] Import defineConfig
- [x] Setup tokens structure
- [x] Setup semanticTokens
- [x] Add global styles
- [ ] Add RTL direction
- [x] Test theme inside admin app

---

## Colors

- [x] Define brand.primary (5 shades)
- [x] Define brand.secondary (5 shades)
- [x] Define brand.accent
- [x] Define brand.neutral
- [x] Define success color
- [x] Define error color
- [x] Define warning color
- [x] Map semantic colors
- [x] Test color usage in Box
- [x] Test hover state colors

---

## Typography

- [x] Install Cairo
- [x] Install Tajawal
- [x] Add fonts to tokens
- [x] Set body font
- [x] Set heading font
- [x] Test Arabic paragraph
- [x] Test bold/semibold weights

---

## Shadows & Radius

- [ ] Define xs shadow
- [ ] Define sm shadow
- [ ] Define md shadow
- [ ] Define lg shadow
- [ ] Define border radius sm
- [ ] Define border radius md
- [ ] Define border radius lg

---

# 2️⃣ Provider Setup

- [x] Create provider.tsx
- [x] Wrap ChakraProvider
- [x] Pass system config
- [x] Export UIProvider
- [x] Test inside admin app

---

# 3️⃣ Button Components

## Base Button

- [x] Create components/Button folder
- [x] Create Button.tsx
- [x] Extend Chakra Button
- [x] Add default size
- [ ] Add loading state
- [x] Add disabled state
- [x] Export from index.ts

## Variants

- [x] Create PrimaryButton
- [x] Create SecondaryButton
- [x] Create DangerButton
- [x] Create OutlineButton
- [x] Create GhostButton

---

# 4️⃣ Input Components

## TextInput

- [ ] Create TextInput.tsx
- [ ] Add label
- [ ] Add helper text
- [ ] Add error message
- [ ] Add required indicator
- [ ] Style focus state

## PasswordInput

- [ ] Create PasswordInput
- [ ] Add show/hide toggle
- [ ] Add icon button
- [ ] Test validation error

## TextArea

- [ ] Create TextArea wrapper
- [ ] Add label support
- [ ] Add error state

## Select

- [ ] Create Select component
- [ ] Add label
- [ ] Add placeholder
- [ ] Add error state
- [ ] Style dropdown

## Checkbox

- [x] Create Checkbox wrapper
- [x] Add label
- [x] Add checked state styling
- [x] Add disabled state
- [ ] Add group support (CheckboxGroup)

## Radio

- [x] Create Radio wrapper
- [ ] Add RadioGroup
- [ ] Add label
- [ ] Add error state
- [ ] Style selected state

## FileUpload

- [ ] Create FileUpload
- [ ] Add drag & drop area
- [ ] Add preview file name
- [ ] Add remove file option
- [ ] Add error state

## SearchBar

- [ ] Create SearchBar component
- [ ] Add search icon
- [ ] Add clear button
- [ ] Add debounce support (optional)
- [ ] Test inside job listing

---

# 5️⃣ Data Display Components

## Avatar

- [ ] Create Avatar wrapper
- [ ] Add fallback initials
- [ ] Add image support
- [ ] Add size variants

## Badge

- [ ] Create Badge component
- [ ] Add success variant
- [ ] Add pending variant
- [ ] Add rejected variant
- [ ] Add info variant

## Divider

- [ ] Create Divider wrapper
- [ ] Add horizontal variant
- [ ] Add vertical variant
- [ ] Add spacing options

## Tooltip

- [ ] Create Tooltip wrapper
- [ ] Add placement option
- [ ] Add arrow
- [ ] Test on button hover

## Toast

- [ ] Create Toast helper function
- [ ] Add success toast
- [ ] Add error toast
- [ ] Add warning toast
- [ ] Add custom duration

## Skeleton

- [ ] Create Skeleton wrapper
- [ ] Add text skeleton
- [ ] Add card skeleton
- [ ] Add table skeleton

---

# 6️⃣ Table System

## Base Table

- [ ] Create Table wrapper
- [ ] Add striped variant
- [ ] Add hover row style
- [ ] Add responsive support

## TableRow

- [ ] Create TableRow component
- [ ] Add clickable row option
- [ ] Add hover effect

## TableHeader

- [ ] Create TableHeader wrapper
- [ ] Add sortable column option

## Pagination

- [ ] Create Pagination component
- [ ] Add next/previous buttons
- [ ] Add page numbers
- [ ] Add disabled states
- [ ] Add page size selector

---

# 7️⃣ Layout Components

## Card

- [ ] Create Card wrapper
- [ ] Add header slot
- [ ] Add footer slot
- [ ] Add shadow variant
- [ ] Add bordered variant

## Container

- [ ] Create Container wrapper
- [ ] Add maxWidth option
- [ ] Add padding

## Section

- [ ] Create Section component
- [ ] Add title prop
- [ ] Add spacing control

---

# 8️⃣ Advanced Components

## Modal

- [ ] Create Modal wrapper
- [ ] Add header
- [ ] Add body
- [ ] Add footer
- [ ] Add close button

## ConfirmationDialog

- [ ] Create ConfirmationDialog
- [ ] Add confirm button
- [ ] Add cancel button
- [ ] Add loading state

## Stepper

- [ ] Create Stepper component
- [ ] Add active step state
- [ ] Add completed step style
- [ ] Add horizontal layout
- [ ] Add vertical layout

## Tabs

- [ ] Create Tabs wrapper
- [ ] Add tab list
- [ ] Add tab panel
- [ ] Add active tab styling
- [ ] Add RTL test

---

# 9️⃣ Final Cleanup

- [ ] Export all components from index.ts
- [ ] Ensure consistent naming
- [ ] Test all components in admin sandbox page
- [ ] Fix spacing inconsistencies
- [ ] Fix RTL issues
- [ ] Review accessibility (aria labels)
