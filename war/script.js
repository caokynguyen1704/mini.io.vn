  // Lấy tham chiếu đến canvas và context 2D
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Kích thước của bảng canvas và ô
  let numRows = 30;
  let numCols = 30;
  let cellSize;

  // Mảng 2 chiều lưu trạng thái của các ô trong bảng
  const grid = [];

  // Hàm để cập nhật kích thước canvas
  function updateCanvasSize() {
      // Tính toán chiều ngắn nhất giữa chiều cao và chiều rộng của trình duyệt
      const minDimension = Math.min(window.innerWidth, window.innerHeight);

      // Tính toán kích thước ô dựa vào số hàng và số cột
      cellSize = Math.floor(minDimension * 0.95 / numCols); // 90% của chiều ngắn nhất

      // Cập nhật lại kích thước canvas
      canvas.width = numCols * cellSize;
      canvas.height = numRows * cellSize;

      // Khởi tạo các ô với giá trị mặc định (ví dụ: trạng thái ô trắng)
      for (let i = 0; i < numRows; i++) {
          grid.push(new Array(numCols).fill('#FFFFFF'));
      }

      // Vẽ lại nội dung canvas sau khi cập nhật kích thước
      draw();
  }

  // Gọi hàm updateCanvasSize() để cập nhật kích thước canvas ban đầu
  updateCanvasSize();

  // Hàm vẽ lại nội dung canvas
  function draw() {
      // Xóa nội dung canvas trước khi vẽ lại
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Vẽ từng ô trong bảng
      for (let row = 0; row < numRows; row++) {
          for (let col = 0; col < numCols; col++) {
              ctx.fillStyle = grid[row][col];
              ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
              ctx.strokeStyle = '#000000';
              ctx.strokeRect(col * cellSize, row * cellSize, cellSize, cellSize);
          }
      }
  }

 

 

  // Hàm xử lý sự kiện click trên canvas để tô màu ô
  canvas.addEventListener('click', function(event) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Tính toán chỉ số của ô trong mảng grid dựa vào vị trí click
      const colIndex = Math.floor(mouseX / cellSize);
      const rowIndex = Math.floor(mouseY / cellSize);

      // Thay đổi màu của ô tương ứng khi click
      grid[rowIndex][colIndex] = 'red'; // Màu đen (#000000)

      // Vẽ lại nội dung canvas sau khi thay đổi màu
      draw();
  });

  // Cập nhật kích thước canvas khi thay đổi kích thước cửa sổ
  window.addEventListener('resize', function() {
      updateCanvasSize();
  });