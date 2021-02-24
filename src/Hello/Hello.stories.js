import React from 'react';
import Hello from './Hello';

export default {
    title: 'components/baisc/Hello',
    component: Hello,
};

export const standard = () => <Hello name="storybook" />;
export const big = () => <Hello name="storybook" big />;
