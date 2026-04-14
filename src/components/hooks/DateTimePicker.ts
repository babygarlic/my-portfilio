import { useState, useMemo, useEffect, useRef } from "react";

export const useDateTimePicker = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    // Ref này dùng để gắn vào thẻ div bao ngoài cùng của Component
    const containerRef = useRef<HTMLDivElement>(null);

    // Toggle: Click vào thì đảo ngược trạng thái
    const toggleOpen = () => setIsOpen(prev => !prev);

    const handleDateChange = (date: Date) => {
        setCurrentDate(date);
        // Thường khi chọn ngày xong người ta sẽ đóng popup luôn
        setIsOpen(false); 
    };

    // Logic xử lý Click Outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Nếu click KHÔNG nằm trong vùng của containerRef thì đóng
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return {
        isOpen,
        toggleOpen,
        currentDate,
        handleDateChange,
        containerRef, // Trả về ref để gắn vào giao diện
        dateFormat: 'MM/DD/YYYY' // Có thể để hằng số hoặc useMemo
    };
};