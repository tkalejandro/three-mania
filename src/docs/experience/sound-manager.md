# Sound Manager Component

## Overview
The Sound Manager component is responsible for managing the volume of different audio elements in the Experience. It controls when to play specific sounds, adjusts their volumes smoothly, and provides these functionalities through a React context.

## Key Concepts

### 1. Audio Initialization
   - The Sound Manager initializes and manages several audio elements: `mainSound`, `guitarSound`, `secretSound`, and `postSecretSound`.

### 2. Play Function
   - The `play` function sets the initial volume and starts playing the main audio elements.

### 3. React Context
   - The component uses React context (`soundManagerContext`) to provide functions (`onFirstLayer`, `onSecretVisible`, `onSecretNotVisible`, and `onSecretFound`) to child components.

### 4. Event Handlers
   - **onFirstLayer:** Activates the first layer of sound by smoothly changing the volume of the guitar sound.
   - **onSecretVisible:** Changes the volume of the guitar and secret sounds smoothly when the secret becomes visible.
   - **onSecretNotVisible:** Adjusts the volume of the guitar and secret sounds smoothly when the secret is no longer visible.
   - **onSecretFound:** Initiates a sequence of volume changes when the secret is found, including fading out the secret and guitar sounds and fading in a post-secret sound.

### 5. Audio Elements
   - The component initializes audio elements with corresponding audio sources using `audioLibrary`.

### 6. useEffect
   - The `useEffect` hook ensures that when the application phase changes to "Playing," the `play` function is called to start playing the sounds.

## Usage
   - Wrap your components with the `SoundManager` to access the provided context and utilize the sound functionalities.

### Example:
```jsx
<SoundManager>
  {/* Your components go here */}
</SoundManager>
```

## Accessing Context in a Child Component

```jsx
...

const ChildComponent = () => {
const { onFirstLayer, onSecretVisible, onSecretNotVisible, onSecretFound } = useSoundManagerContext();

    // Your code ...

    return (
        <>
            // Your code ...
            <button onClick={onFirstLayer}>Activate First Layer Sound</button>
        </>
    )

}
```

Now, child components can use these functions to trigger various sound-related actions based on the application's logic.


## Sound Helpers

The `soundHelpers.ts` file provides a utility class, `SoundHelpers`, containing essential functions for interacting with sounds in a React application. This class is crucial for the Sound Manager component, enhancing its capabilities to smoothly control audio volume changes and manage multiple changes concurrently.

### Importance:

#### Smooth Volume Change:

The `smoothVolumeChange` function enables smooth transitions in audio volume over a specified duration. It prevents rapid and abrupt changes, contributing to a more pleasant user experience.

#### Error Handling:

It includes error handling to ensure that developers provide valid target volume values between 0 and 1. This promotes code reliability and prevents unintended behavior.

#### Progress Control:

The `progress` and `setProgress` parameters allow developers to control and track ongoing volume changes. This prevents multiple concurrent calls and ensures that changes are made progressively.

#### Concurrent Changes:

The `handleManyChanges` function facilitates handling multiple changes simultaneously. It uses `Promise.all` to execute an array of functions asynchronously, allowing the Sound Manager to manage various sound-related actions concurrently.

When integrated with the Sound Manager component, SoundHelpers enhances its capabilities, providing essential functionality for managing sound transitions and handling multiple sound-related actions effectively.

Developers are encouraged not only to use these features for enhanced user experiences but also to contribute by adding cool functionalities to the `SoundHelpers` class. Collaborate to create a dynamic and feature-rich audio experience in React applications. Open for contributions, the versatile `SoundHelpers` class is ready to evolve and adapt to developers' diverse needs, aiming to create immersive soundscapes in their projects.

