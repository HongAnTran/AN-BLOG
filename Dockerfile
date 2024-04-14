# Sử dụng một image node.js chứa npm để cài đặt và xây dựng ứng dụng
FROM node:alpine AS builder

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép tất cả các tệp từ thư mục hiện tại vào image
COPY . .

# Cài đặt các gói phụ thuộc và xây dựng ứng dụng
RUN npm install
RUN npm run build

# Sử dụng image nginx nhỏ để chứa ứng dụng đã xây dựng
FROM nginx:alpine

# Sao chép tệp tĩnh đã xây dựng từ image trước
COPY --from=builder /app/out /usr/share/nginx/html

# Mở cổng 80 để có thể truy cập vào ứng dụng qua HTTP
EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
