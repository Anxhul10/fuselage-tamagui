import React from "react";
import {RoundedSquare} from './RoundedSquare';
import { Button as TamaButton,styled, Text,View ,Theme} from "tamagui";
import {ButtonFrame, ButtonText} from './CustomButton';
import {ZButton} from './CustomButton';
import {Spinner} from 'tamagui';
interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onPress?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, label, onPress }: ButtonProps) => {
  return (
    <ZButton variant='outlined'>Button</ZButton>
  );
};
export const LoadingButton = ({ backgroundColor, label, onPress }: ButtonProps) => {
  return (
    <ZButton >
      <Spinner color="#6C727A"></Spinner>
      <ButtonText>Button</ButtonText>
    </ZButton>
    
  );
};
export const DisabledButton = ({ backgroundColor, label, onPress }: ButtonProps) => {
  return (
    <ZButton disabled >Button</ZButton>
  );
};
