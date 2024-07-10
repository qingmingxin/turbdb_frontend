the grid can be read from the files via:
(nx,ny should be adjusted for different casies)

    real*8,allocatable,dimension(:,:) :: xx,yy
    integer :: nx,ny
    nx=3100
    ny=240
    allocate(xx(nx,ny),yy(nx,ny))
    open(2,file="OCFD-grid.dat",form="unformatted")
    read(2) xx
    read(2) yy
    close(2)

or (for case1(flat plat)):

    real*8,allocatable,dimension(:) :: xx,sx,yy,sy
    integer :: nx,ny
    nx=2193
    ny=72
    allocate(xx(nx),sx(nx),yy(ny),sy(ny))
    open(3,file='grid-xy.dat',form='unformatted')
    read(3) xx,sx
    read(3) yy,sy
    close(3)

and read Jacobi:

    real*8,allocatable,dimension(:,:) :: xx,yy,Akx,Aky,Aix,Aiy,Ajac
    integer :: nx,ny
    nx=3100
    ny=240
    allocate(xx(nx,ny),yy(nx,ny))
    allocate(Akx(nx,ny),Aky(nx,ny),Aix(nx,ny),Aiy(nx,ny),Ajac(nx,ny))
    open(4,file='OCFD2d-Jacobi.dat',form='unformatted')
    read(4) xx
    read(4) yy
    read(4) Akx
    read(4) Aky
    read(4) Aix
    read(4) Aiy
    read(4) Ajac
    close(4)

Variables:
"nx" = number of points in x direction
"ny" = number of points in y direction
"xx","sx" = x coordinate (Radial coordinates for case5,6--blunt cone)
"yy","sy" = y coordinate (Flow direction coordinates for case5,6--blunt cone)
"Akx","Aky" = metrics, dkdx and dkdy
"Aix","Aiy" = metrics, didx and didy
"Ajac" = Jacobians
