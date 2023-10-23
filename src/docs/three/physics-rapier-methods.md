# Physics Simulation Methods with Examples

In a physics simulation using a cube and a ball, various methods are available to control and manipulate the behavior of these objects. Below are explanations and examples for each of these methods.

## `addForce`
- **Example:** Apply a force to the cube to simulate a push, making it move forward.

## `addForceAtPoint`
- **Example:** Apply a force at a specific point on the ball to make it spin while moving.

## `addTorque`
- **Example:** Apply a torque to the cube to make it spin in place like a top.

## `angularDamping`
- **Example:** Set angular damping on the ball so that it slows down its spin gradually after a collision.

## `angvel`
- **Example:** Check the angular velocity of the cube to see how fast it's rotating.

## `applyImpulse`
- **Example:** Flick the ball with a sudden impulse to make it move in a particular direction.

## `applyImpulseAtPoint`
- **Example:** Tap the cube at a specific point to give it an impulse, causing it to move and rotate.

## `applyTorqueImpulse`
- **Example:** Give the cube a quick torque impulse to make it spin rapidly.

## `bodyType`
- **Example:** Set the cube as a dynamic body to allow it to move and interact with other objects. Set the ball as kinematic to control its movement manually.

## `collider`
- **Example:** Attach a collider to each object to define their shape for collision detection.

## `dominanceGroup`
- **Example:** Place both the cube and the ball in the same dominance group to control how they interact during collisions.

## `effectiveAngularInertia`
- **Example:** Calculate the effective angular inertia of the cube, considering its shape and mass distribution.

## `effectiveInvMass`
- **Example:** Determine the effective inverse mass of the ball, considering both its mass and type.

## `effectiveWorldInvInertiaSqrt`
- **Example:** Calculate the effective inverse square root of the world space inertia tensor for the cube, which influences its rotational behavior.

## `enableCcd`
- **Example:** Enable continuous collision detection for the cube, preventing it from tunneling through other objects during high-speed motion.

## `finalizeDeserialization`
- **Example:** Use this method to complete the deserialization of an object, ensuring it's correctly initialized in the physics simulation.

## `gravityScale`
- **Example:** Increase the gravity scale for the cube to make it feel heavier and fall faster, while reducing it for the ball to make it float.

## `invMass`
- **Example:** Adjust the inverse mass of the cube to make it more resistant to motion.

## `invPrincipalInertiaSqrt`
- **Example:** Determine the inverse square root of the principal inertia tensor for the cube to control its angular response.

## `isCcdEnabled`
- **Example:** Check if continuous collision detection is enabled for the cube to ensure accurate collision handling at high velocities.

## `isDynamic`
- **Example:** Check if the cube is a dynamic object, meaning it can move and be affected by external forces.

## `isEnabled`
- **Example:** Verify if the ball is currently enabled within the simulation. Disabling it will make it non-responsive to forces and collisions.

## `isFixed`
- **Example:** Determine if the cube is fixed, meaning it cannot move or be influenced by external forces.

## `isKinematic`
- **Example:** Check if the ball is set as a kinematic object, allowing manual control over its movement.

## `isMoving`
- **Example:** Check if the cube is moving by assessing its velocity and angular velocity.

## `isSleeping`
- **Example:** Check if the ball is sleeping, meaning it's in a resting state to conserve computational resources when not in motion.

## `isValid`
- **Example:** Verify if the cube is a valid object within the physics simulation, ensuring proper initialization.

## `linearDamping`
- **Example:** Apply linear damping to the cube to simulate the effect of air resistance, slowing down its movement.

## `linvel`
- **Example:** Check the linear velocity of the ball to see how fast it's moving in a straight line.

## `localCom`
- **Example:** Adjust the local center of mass of the cube to change its balance and how it responds to forces.

## `lockRotations`
- **Example:** Lock the rotations of the cube to prevent it from spinning around.

## `lockTranslations`
- **Example:** Lock the translations of the cube to prevent it from moving in a straight line.

## `mass`
- **Example:** Set the mass of the cube, influencing how it responds to forces and accelerations.

## `nextRotation`
- **Example:** Specify the desired rotation for the cube in the next simulation step.

## `nextTranslation`
- **Example:** Specify the desired translation for the cube in the next simulation step.

## `numColliders`
- **Example:** Count the number of colliders attached to the cube and the ball.

## `principalInertia`
- **Example:** Calculate the principal inertia tensor for the cube, determining how mass is distributed and how it resists angular acceleration.

## `principalInertiaLocalFrame`
- **Example:** Determine the local frame of reference for the principal inertia tensor of the cube.

## `recomputeMassPropertiesFromColliders`
- **Example:** Use this method to update the mass properties of the cube based on its attached colliders.

## `resetForces`
- **Example:** Reset all forces acting on the cube to stop any ongoing motion.

## `resetTorques`
- **Example:** Reset all torques (rotational forces) acting on the cube.

## `restrictRotations`
- **Example:** Restrict certain types of rotations for the cube, allowing only specific rotational movements.

## `restrictTranslations`
- **Example:** Restrict certain types of translations for the cube, limiting its linear movements.

## `rotation`
- **Example:** Determine the current orientation or rotation of the cube in 3D space.

## `setAdditionalMass`
- **Example:** Add extra mass to the cube to make it heavier and more resistant to motion.

## `setAdditionalMassProperties`
- **Example:** Add extra mass and specify additional mass properties, such as center of mass, for the cube.

## `setAngularDamping`
- **Example:** Set angular damping for the cube to control how quickly its rotational velocity decreases.

## `setAngvel`
- **Example:** Set the angular velocity of the cube to make it spin at a specific rate.

## `setBodyType`
- **Example:** Change the body type of the cube from dynamic to kinematic, allowing manual control of its movement.

## `setDominanceGroup`
- **Example:** Set the dominance group for the cube to influence its interactions with other objects during collisions.

## `setEnabled`
- **Example:** Enable or disable the cube within the physics simulation, controlling its responsiveness to forces and collisions.

## `setEnabledRotations`
- **Example:** Enable or disable rotations for the cube, deciding whether it can spin or not.

## `setEnabledTranslations`
- **Example:** Enable or disable translations for the cube, determining whether it can move in a straight line or not.

## `setGravityScale`
- **Example:** Adjust the gravity scale of the ball to make it lighter or heavier, affecting how it falls or floats.

## `setLinearDamping`
- **Example:** Set the linear damping factor for the ball to control how quickly its linear velocity decreases.

## `setLinvel`
- **Example:** Set the linear velocity of the cube to make it move at a specific speed in a straight line.

## `setNextKinematicRotation`
- **Example:** Specify the desired rotation for the cube in the next simulation step when it's set as a kinematic object.

## `setNextKinematicTranslation`
- **Example:** Specify the desired translation for the cube in the next simulation step when it's set as a kinematic object.

## `setRotation`
- **Example:** Set the rotation of the cube to a specific orientation.

## `setTranslation`
- **Example:** Set the translation of the cube to change its position in 3D space.

## `sleep`
- **Example:** Put the cube into a sleeping state to conserve computational resources when it's not moving.

## `translation`
- **Example:** Determine the current position or location of the cube in 3D space.

## `wakeUp`
- **Example:** Wake up a sleeping cube to make it active in the simulation again.

## `worldCom`
- **Example:** Determine the world center of mass for the cube, which can be different from its local center of mass and affects how it responds to physical interactions.
