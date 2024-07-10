the sample data can be read from the files via:
(nx,ny,nz,m_sec should be adjusted for different casies)

    real*8,allocatable,dimension(:,:,:) :: d,u,v,w,T
    real*8 :: tt
    integer :: nx,ny,nz,Istep,mstep,m_sec
    nx=5
    ny=240
    nz=150
    m_sec=5000
    allocate(d(nx,ny,nz),u(nx,ny,nz),v(nx,ny,nz),w(nx,ny,nz),T(nx,ny,nz))
    open(1,file="savedata-YZ001.dat",form="unformatted")

    do mstep=1,m_sec
        read(1) Istep,tt
        do i = 1, nx
            read(1) d(i,:,:)
        enddo
        do i = 1, nx
            read(1) u(i,:,:)
        enddo
        do i = 1, nx
            read(1) v(i,:,:)
        enddo
        do i = 1, nx
            read(1) w(i,:,:)
        enddo
        do i = 1, nx
            read(1) T(i,:,:)
        enddo
    enddo

    close(1)

Variables:
"nx" = number of points in x direction
"ny" = number of points in y direction
"nz" = number of points in z direction
"m_sec" = total time steps of instant flow field block
"Istep" = time step of the instant flow field block
"tt" = time of the instant flow field block
"d" = density
"u" = u-velocity
"v" = v-velocity
"w" = w-velocity
"T" = temperature
