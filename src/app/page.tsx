import Image from 'next/image';
import CustomWebcam from '@/components/CustomWebcam';

export default function Home() {
  return (
    <main className=''>
      <div className='h-40 text-center p-5'>Try it on!</div>
      <CustomWebcam />
    </main>
  );
}
