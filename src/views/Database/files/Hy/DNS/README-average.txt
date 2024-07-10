the average data can be read from the files via:
(nx,ny,nz should be adjusted for different casies)

    real*8,allocatable,dimension(:,:,:) :: d,u,v,w,T
    real*8 :: tt
    integer :: nx,ny,nz,Istep
    nx=3100
    ny=240
    nz=150
    allocate(d(nx,ny,nz),u(nx,ny,nz),v(nx,ny,nz),w(nx,ny,nz),T(nx,ny,nz))
    open(1,file="OCFDxxxxxxxx.average",form="unformatted")
    read(1) Istep,tt
    do k=1,nz
        read(1) d(:,:,k)
    enddo
    do k=1,nz
        read(1) u(:,:,k)
    enddo
    do k=1,nz
        read(1) v(:,:,k)
    enddo
    do k=1,nz
        read(1) w(:,:,k)
    enddo
    do k=1,nz
        read(1) T(:,:,k)
    enddo
    close(1)

Variables:
"nx" = number of points in x direction
"ny" = number of points in y direction
"nz" = number of points in z direction
"Istep" = total number of instant flow fields for averaging
"tt" = total time span of the instant flow fields for averaging
"d" = density
"u" = u-velocity
"v" = v-velocity
"w" = w-velocity
"T" = temperature
