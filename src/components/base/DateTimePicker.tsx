import React from 'react'
interface DateTimePickerProps {
    isOpen: boolean;
    currentDate: Date;
    from: Date;
    to: Date;
    dateFormat: string;
    onDateChange: (date: Date) => void;
    containerRef: React.RefObject<HTMLDivElement>;
}
export default function DateTimePicker({ isOpen, containerRef, ...props }: DateTimePickerProps) {
  if (!isOpen) return null;

  return (
    <div
      className="datetime-picker-popup"
      style={{
        position: 'absolute',
        top: 'calc(100% + 5px)', // Luôn cách thẻ cha (relative) 5px bên dưới
        left: 0,                 // Bám lề trái của thẻ cha
        backgroundColor: 'white',
        color: 'black',          // Đảm bảo chữ đen trên nền trắng của popup
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        zIndex: 999,
        minWidth: '280px'
      }}
    >
      <header className="flex justify-between mb-4">
           {/* Logic chọn tháng/năm ở đây */}
           <p className="font-bold">Tháng 04, 2026</p>
        </header>
        
        {/* Render Grid ngày tháng */}
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
           {/* Ví dụ render ngày */}
           {[...Array(31)].map((_, i) => (
             <div key={i} className="p-2 hover:bg-blue-100 cursor-pointer rounded">
               {i + 1}
             </div>
           ))}
        </div>
    </div>
  );
}
