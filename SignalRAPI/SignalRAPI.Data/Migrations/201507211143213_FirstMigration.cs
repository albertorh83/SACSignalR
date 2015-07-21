namespace SignalRAPI.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FirstMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Courses",
                c => new
                    {
                        CourseId = c.Guid(nullable: false),
                        Name = c.String(maxLength: 50),
                    })
                .PrimaryKey(t => t.CourseId);
            
            CreateTable(
                "dbo.Students",
                c => new
                    {
                        StudentId = c.Guid(nullable: false),
                        FirstName = c.String(nullable: false, maxLength: 30),
                        MiddleName = c.String(nullable: false, maxLength: 30),
                        LastName = c.String(nullable: false, maxLength: 30),
                        Alias = c.String(),
                        CourseId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.StudentId)
                .ForeignKey("dbo.Courses", t => t.CourseId, cascadeDelete: true)
                .Index(t => t.CourseId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Students", "CourseId", "dbo.Courses");
            DropIndex("dbo.Students", new[] { "CourseId" });
            DropTable("dbo.Students");
            DropTable("dbo.Courses");
        }
    }
}
