# Zustand Store Overview

This document provides a high-level overview of Zustand stores, how to create a new store, and how to use an existing one in your application.

## What is Zustand?

Zustand is a lightweight state management library for React that simplifies state management and provides a minimalistic and efficient API.

## Creating a New Store

To create a new store with Zustand, follow these steps:

1. **Import Dependencies**: Begin by importing the necessary dependencies, including Zustand itself.

2. **Define the Store State**: Define the structure of the state that your store will manage. This structure can include variables, objects, or functions that are relevant to your application.

3. **Create the Store**: Use the `create` function to create a new store. You can add middleware, such as `persist`, to handle data persistence if needed.

4. **Export the Store**: Make the store available for use in your application by exporting it.

## Using an Existing Store

To use an existing Zustand store in your application, follow these steps:

1. **Import the Store**: Import the existing store in the component where you want to access its state.

2. **Access State**: Use the provided hook (e.g., `useAppSettings`) to access the state values you need within your component.

3. **Modify State**: If necessary, you can modify the state using functions provided by the store, allowing you to update the state as needed.

## Example of use in a component

```
import React from 'react';
import useAppSettings from '@/store/useAppSettings';

function MyComponent() {
  const loading = useAppSettings((state) => state.loading);

  return (
    <div>
      <p>Loading: {loading ? 'Yes' or 'No'}</p>
    </div>
  );
}

export default MyComponent;
```
