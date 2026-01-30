import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Landing = ({ onStart }) => {
    return (
        <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '2rem 0' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)', textShadow: '2px 2px 0px rgba(0,0,0,0.1)' }}>
                Định Hướng Tương Lai
            </h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-light)', fontWeight: 600 }}>
                Khám phá tiềm năng của bé - Hành trang vững chắc cho tương lai
            </h2>

            <Card className="animate-fade-in" style={{ maxWidth: '600px', padding: '3rem' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Chào mừng quý phụ huynh! Bài trắc nghiệm nhỏ này sẽ giúp bố mẹ hiểu rõ hơn về
                    <strong> sở thích</strong>, <strong>điểm mạnh</strong> và <strong>tiềm năng</strong> của con (Lớp 1 - 5).
                    Từ đó đưa ra những gợi ý môn học phù hợp nhất.
                </p>
                <Button onClick={onStart} variant="primary">
                    Bắt đầu ngay 🚀
                </Button>
            </Card>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ width: '150px' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎨</div>
                    <strong>Nghệ thuật</strong>
                </div>
                <div style={{ width: '150px' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🧮</div>
                    <strong>Tư duy</strong>
                </div>
                <div style={{ width: '150px' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚽</div>
                    <strong>Vận động</strong>
                </div>
                <div style={{ width: '150px' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🗣️</div>
                    <strong>Ngôn ngữ</strong>
                </div>
            </div>
        </div>
    );
};

export default Landing;
