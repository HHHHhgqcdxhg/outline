// @flow
import React from 'react';
import Icon from './Icon';
import type { Props } from './Icon';

export default function BackIcon(props: Props) {
  return (
    <Icon {...props}>
      <svg
        fill="#000000"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.20710678,8.79289322 C6.81658249,8.40236893 6.18341751,8.40236893 5.79289322,8.79289322 C5.40236893,9.18341751 5.40236893,9.81658249 5.79289322,10.2071068 L10.7928932,15.2071068 C11.1834175,15.5976311 11.8165825,15.5976311 12.2071068,15.2071068 L17.2071068,10.2071068 C17.5976311,9.81658249 17.5976311,9.18341751 17.2071068,8.79289322 C16.8165825,8.40236893 16.1834175,8.40236893 15.7928932,8.79289322 L11.5,13.0857864 L7.20710678,8.79289322 Z"
          id="path-1"
        />
      </svg>
    </Icon>
  );
}
