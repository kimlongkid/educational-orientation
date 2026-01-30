import React, { useMemo } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { traitsMapping } from '../data/questions';

const Result = ({ answers, onRestart }) => {

    const results = useMemo(() => {
        // Convert answers object to array and sort by score
        const resultList = Object.entries(answers).map(([trait, score]) => ({
            trait,
            score,
            ...traitsMapping[trait]
        }));

        // Sort descending
        return resultList.sort((a, b) => b.score - a.score);
    }, [answers]);

    const topTraits = results.slice(0, 3); // Get top 3 strengths

    return (
        <div className="container" style={{ padding: '2rem 0', maxWidth: '1000px' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Kết Quả Định Hướng</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>Dựa trên những quan sát của bố mẹ, đây là những điểm mạnh nổi bật của bé:</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {topTraits.map((item, index) => (
                    <Card key={item.trait} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s`, borderTop: `4px solid ${index === 0 ? 'var(--accent)' : 'var(--primary)'}` }}>
                        <div style={{
                            background: index === 0 ? 'var(--accent)' : 'var(--primary-light)',
                            color: index === 0 ? 'var(--text-main)' : 'white',
                            width: '40px', height: '40px', borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '1rem'
                        }}>
                            #{index + 1}
                        </div>

                        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>{item.field}</h3>
                        <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontStyle: 'italic' }}>({item.trait})</p>

                        <div style={{ background: 'rgba(255,255,255,0.6)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                            <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Môn học/Hoạt động nên tập trung:</h4>
                            <ul style={{ paddingLeft: '1.2rem' }}>
                                {item.subjects.map(sub => (
                                    <li key={sub} style={{ marginBottom: '0.25rem' }}>{sub}</li>
                                ))}
                            </ul>
                        </div>
                    </Card>
                ))}
            </div>

            <Card className="animate-fade-in" style={{ textAlign: 'center', background: 'var(--white)', marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Lời khuyên chung</h3>
                <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                    Mỗi đứa trẻ đều là một thiên tài theo cách riêng của mình. Kết quả này chỉ mang tính chất tham khảo dựa trên sở thích hiện tại.
                    Bố mẹ hãy tiếp tục quan sát, đồng hành và tạo điều kiện để con được trải nghiệm nhiều lĩnh vực khác nhau nhé!
                </p>
                <Button onClick={onRestart} variant="secondary">Làm lại trắc nghiệm 🔄</Button>
            </Card>
        </div>
    );
};

export default Result;
