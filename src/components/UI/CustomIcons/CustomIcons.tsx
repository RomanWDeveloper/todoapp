import Icon from '@ant-design/icons';
import type { GetProps } from 'antd';

type CustomIconComponentProps = GetProps<typeof Icon>;

const VkSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30">    <path fill="#4a76a8" d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21.361,18.967l-1.868,0.026 c0,0-0.403,0.079-0.93-0.285c-0.699-0.48-1.358-1.729-1.872-1.567c-0.521,0.166-0.505,1.29-0.505,1.29s0.004,0.198-0.115,0.327 c-0.129,0.139-0.382,0.125-0.382,0.125h-0.837c0,0-1.846,0.153-3.473-1.543c-1.772-1.849-3.338-5.498-3.338-5.498 s-0.092-0.23,0.006-0.348c0.111-0.13,0.41-0.134,0.41-0.134l2-0.01c0,0,0.188,0.033,0.324,0.133 c0.111,0.082,0.174,0.236,0.174,0.236s0.323,0.819,0.752,1.561c0.836,1.446,1.224,1.763,1.508,1.608 c0.414-0.226,0.29-2.044,0.29-2.044s0.008-0.66-0.208-0.954c-0.168-0.229-0.484-0.297-0.622-0.314 c-0.113-0.015,0.071-0.277,0.311-0.395c0.36-0.176,0.996-0.186,1.747-0.179c0.585,0.006,0.754,0.042,0.982,0.098 c0.69,0.167,0.456,0.811,0.456,2.356c0,0.495-0.089,1.191,0.267,1.42c0.154,0.099,0.529,0.015,1.464-1.579 c0.445-0.756,0.778-1.644,0.778-1.644s0.073-0.158,0.186-0.226c0.116-0.07,0.272-0.048,0.272-0.048l2.105-0.013 c0,0,0.632-0.076,0.735,0.211c0.108,0.3-0.236,1.001-1.096,2.148c-1.412,1.884-1.569,1.709-0.396,2.799 c1.12,1.041,1.351,1.547,1.39,1.611C22.339,18.906,21.361,18.967,21.361,18.967z"/></svg>
);

const GoogleSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
);

export const VkIconFilled = (props: Partial<CustomIconComponentProps>) => (
  <Icon style={{ width: 30, height: 30 }} component={VkSvg} {...props} />
);

export const GoogleIconFilled = (props: Partial<CustomIconComponentProps>) => (
  <Icon  style={{ width: 24, height: 24 }}  component={GoogleSvg} {...props} />
)