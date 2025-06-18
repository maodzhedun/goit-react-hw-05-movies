import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Photo = styled.img`
  width: 120px;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  background: #f0f0f0;
`;

export const Name = styled.h3`
  margin: 0 0 6px 0;
  font-size: 1.05rem;
  font-weight: 600;
`;

export const Character = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #555;
`;