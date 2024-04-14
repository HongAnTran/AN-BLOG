FROM node:latest

# Tạo thư mục làm việc và di chuyển vào đó
WORKDIR /app

# Sao chép package.json và package-lock.json nếu có
COPY package*.json ./

# Cài đặt các gói npm
RUN npm install

# Sao chép toàn bộ mã nguồn ứng dụng vào thư mục làm việc
COPY . .

# Mở cổng 3000 để ứng dụng có thể chạy trên cổng này
EXPOSE 3000

# Khởi chạy ứng dụng
CMD ["npm", "run", "start"]
