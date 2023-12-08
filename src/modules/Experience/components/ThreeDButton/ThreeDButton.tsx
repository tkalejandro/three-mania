import React, { useEffect, useRef, useState } from 'react';
import { GroupProps, useFrame } from '@react-three/fiber';
import { Group, Mesh, MeshStandardMaterial } from 'three';
import { Center, Text } from '@react-three/drei';
import { useTheme } from '@chakra-ui/system';
import { ThreeColor, ThreeSize } from '@/types/ExperienceTypes';

interface ThreeDButtonProps extends GroupProps {
  /**
   * Size of the button
   */
  size?: ThreeSize;
  /**
   * Color of the button. Only theme are allow
   */
  color?: ThreeColor;

  /**
   * Text of the button
   */
  text: string;

  /**
   * Color will change if is selected
   */
  isSelected?: boolean;
}

const ThreeDButton = ({
  size = 'md',
  isSelected = false,
  color,
  text,
  ...props
}: ThreeDButtonProps) => {
  const theme = useTheme();

  const buttonRef = useRef<Mesh>(null);
  const textRef = useRef<Group>(null);
  const [buttonScale, setButtonScale] = useState<number | null>(null);
  const [buttonColor, setButtonColor] = useState<string>();
  const [textColor, setTextColor] = useState<string>();

  useEffect(() => {
    colorToUse();
    scaleToUse();
  }, [size, color, isSelected]);

  const scaleToUse = (): void => {
    switch (size) {
      case 'xs':
        setButtonScale(0.4);
        break;
      case 'sm':
        setButtonScale(0.7);
        break;
      case 'md':
        setButtonScale(1);
        break;
      case 'lg':
        setButtonScale(1.3);
        break;
      case 'xl':
        setButtonScale(1.6);
        break;
      default:
        setButtonScale(null);
    }
  };

  const colorToUse = (): void => {
    const shade = 900;
    switch (color) {
      case 'primary':
        setButtonColor(isSelected ? theme.colors.primary[shade] : theme.colors.primary.main);
        setTextColor(theme.colors.white);
        break;
      case 'secondary':
        setButtonColor(isSelected ? theme.colors.secondary[shade] : theme.colors.secondary.main);
        setTextColor(theme.colors.white);
        break;
      case 'warning':
        setButtonColor(isSelected ? theme.colors.warning[shade] : theme.colors.warning.main);
        setTextColor(theme.colors.white);
        break;
      case 'info':
        setButtonColor(isSelected ? theme.colors.info[shade] : theme.colors.info.main);
        setTextColor(theme.colors.white);
        break;
      case 'danger':
        setButtonColor(isSelected ? theme.colors.danger[shade] : theme.colors.danger.main);
        setTextColor(theme.colors.white);
        break;
      case 'success':
        setButtonColor(isSelected ? theme.colors.success[shade] : theme.colors.success.main);
        setTextColor(theme.colors.white);
        break;
      case 'black':
        setButtonColor(theme.colors.black);
        setTextColor(theme.colors.white);
        break;
      case 'white':
        setButtonColor(theme.colors.white);
        setTextColor(theme.colors.black);
        break;
      default:
        // Handle any other cases or set a default color
        setButtonColor(theme.colors.primary.main);
    }
  };
  if (!buttonScale) return null;
  return (
    <group {...props} scale={buttonScale}>
      {/* Button */}

      <mesh ref={buttonRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.4, 0.14, 0.05, 1, 1, 1]} />
        <meshStandardMaterial color={buttonColor} />
      </mesh>

      {/* Text */}
      <Text
        position={[0, -0.005, 0.028]}
        ref={textRef}
        fontSize={0.07}
        font="Arial"
        color={textColor}
      >
        {text}
      </Text>
    </group>
  );
};

export default ThreeDButton;
